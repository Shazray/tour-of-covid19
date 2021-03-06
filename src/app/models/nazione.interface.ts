export interface Nazione {
    data: string;
    stato: string;
    ricoverati_con_sintomi: number;
    // ricoveratiConSintomi: number
    terapia_intensiva: number;
    totale_ospedalizzati: number;
    isolamento_domiciliare: number;
    totale_attualmente_positivi: number;
    nuovi_attualmente_positivi: number;
    dimessi_guariti: number;
    deceduti: number;
    totale_casi: number;
    tamponi: number;
}
