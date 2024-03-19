export function getUtmParamsValue(paramNames: string[]) {
  if (typeof window !== 'undefined') {
    const utm = localStorage.getItem('utm');

    if (utm) {
      const value = JSON.parse(utm);
      const result: Record<string, string> = {};

      if (value) {
        paramNames.forEach((item) => {
          result[item] = value[item] ? value[item] : '';
        });
      }

      return result;
    }
  }

  return null;
}
