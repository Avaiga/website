declare namespace Shared {
  type ToggleItem<T extends string> = {
    title: T;
    specialInfo?: string;
  };

  type ToggleItems<T extends string> = [ToggleItem<T>, ToggleItem<T>];
}
