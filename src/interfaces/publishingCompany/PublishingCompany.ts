export interface WrongPublishingCompanyOpeningDateType {
  corporateName: string;
  fantasyName: string;
  openingDate: string;
  address: string;
  cellphone: string;
};

export interface NewPublishingCompany {
  corporate_name: string;
  fantasy_name: string;
  opening_date: Date;
  address: string;
  cellphone: string;
};

export interface PublishingCompany extends NewPublishingCompany {
  id: number;
};
