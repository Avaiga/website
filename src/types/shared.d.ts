declare namespace Shared {
  type ToggleItem<T extends string> = {
    title: T;
    specialInfo?: string;
  };
}
