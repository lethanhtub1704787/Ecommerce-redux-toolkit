export const fixItemName = (name: string, MaxLength: number) => {
  if (name.length > MaxLength) {
    return name.substring(0, MaxLength) + '...';
  }
  return name;
};
