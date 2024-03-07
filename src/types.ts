export interface Currencies {
    id: number;
    heading: string;
    subheading: string;
    description: string;
    heading2: string;
    description2_pointer1: string;
    description2_pointer2: string;
    description2_pointer3: string;
    heading3: string;
    card_details: {
        profit: {
            heading: string;
            img: string;
        };
        liability: {
            heading: string;
            img: string;
        };
    };
    summary: string;
}