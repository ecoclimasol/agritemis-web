'use client';

import { useState, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from '@/i18n/navigation.client';
import Section from '@/components/layout/Section';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  function: string;
}

const INITIAL_FORM_DATA: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  function: '',
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function IndicatorRequestPage() {
  const t = useTranslations('IndicatorRequest');

  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = useCallback((): Record<string, string> => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = t('error_required');
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = t('error_required');
    }

    if (!formData.email.trim()) {
      newErrors.email = t('error_required');
    } else if (!EMAIL_REGEX.test(formData.email)) {
      newErrors.email = t('error_email_invalid');
    }

    if (!formData.function.trim()) {
      newErrors.function = t('error_required');
    }

    return newErrors;
  }, [formData, t]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear field error on change
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    // Simulate submission (replace with real API call)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitted(true);
    setIsSubmitting(false);
  };

  if (submitted) {
    return (
      <Section background="surface" className="min-h-screen flex items-center">
        <div className="mx-auto max-w-md w-full">
          <Card variant="elevated" className="p-8 text-center">
            <div className="w-16 h-16 bg-agri-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-agri-green-600" />
            </div>

            <h2 className="text-2xl font-bold text-text-primary mb-4">
              {t('success_title')}
            </h2>

            <p className="text-text-secondary mb-6">
              {t('success_message')}
            </p>

            <Button variant="primary" size="lg" asChild>
              <Link href="/">
                {t('back_home')}
              </Link>
            </Button>
          </Card>
        </div>
      </Section>
    );
  }

  return (
    <Section background="surface" className="min-h-screen">
      <div className="mx-auto max-w-2xl">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          {t('back')}
        </Link>

        {/* Form card */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-text-primary mb-2">
            {t('title')}
          </h1>

          <p className="text-text-secondary mb-8">
            {t('form_intro')}
          </p>

          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            {/* First name */}
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-text-primary mb-2"
              >
                {t('first_name')} *
              </label>
              <Input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                error={!!errors.firstName}
                aria-invalid={!!errors.firstName}
                aria-describedby={errors.firstName ? 'firstName-error' : undefined}
              />
              {errors.firstName && (
                <p id="firstName-error" className="mt-1 text-sm text-error">
                  {errors.firstName}
                </p>
              )}
            </div>

            {/* Last name */}
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-text-primary mb-2"
              >
                {t('last_name')} *
              </label>
              <Input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                error={!!errors.lastName}
                aria-invalid={!!errors.lastName}
                aria-describedby={errors.lastName ? 'lastName-error' : undefined}
              />
              {errors.lastName && (
                <p id="lastName-error" className="mt-1 text-sm text-error">
                  {errors.lastName}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-text-primary mb-2"
              >
                {t('email')} *
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-sm text-error">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Function / Role */}
            <div>
              <label
                htmlFor="function"
                className="block text-sm font-medium text-text-primary mb-2"
              >
                {t('function')} *
              </label>
              <Input
                type="text"
                id="function"
                name="function"
                value={formData.function}
                onChange={handleChange}
                error={!!errors.function}
                aria-invalid={!!errors.function}
                aria-describedby={errors.function ? 'function-error' : undefined}
              />
              {errors.function && (
                <p id="function-error" className="mt-1 text-sm text-error">
                  {errors.function}
                </p>
              )}
            </div>

            {/* Submit */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? t('submitting') : t('submit')}
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
}
