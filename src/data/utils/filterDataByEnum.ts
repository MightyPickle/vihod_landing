export const filterDataByEnum = (portraitData: Record<string, string>[], questionEnum: string, enumValue: string) => portraitData?.filter((el) => el[questionEnum] === enumValue);
