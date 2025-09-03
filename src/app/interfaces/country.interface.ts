interface ICountry {
    name: string,
    iso2: string,
    iso3: string,
    unicodeFlag: string,
}

export interface IApiCountry {
    error: boolean,
    msg: string,
    data: ICountry[],
}