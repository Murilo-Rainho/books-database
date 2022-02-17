export interface wrongPublishingCompanyOpeningDateType {
  corporateName: string;
  fantasyName: string;
  openingDate: string;
  address: string;
  cellphone: string;
};

export interface newPublishingCompany {
  corporateName: string;
  fantasyName: string;
  openingDate: Date;
  address: string;
  cellphone: string;
};

export interface publishingCompany extends newPublishingCompany {
  id: number;
};
