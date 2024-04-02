declare namespace Components {
  namespace Pricing {
    type PaymentPeriods = 'Monthly' | 'Yearly';

    type PlanVariant = Shared.ToggleItem<PaymentPeriods>;
  }
}
