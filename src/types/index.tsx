export type UpdateDesign = (index: number) => void;

export type Dispatch = (action: any) => void;

export interface Design {
	title: string;
	description: string;
	created_date: string;
	doc_link: string;
	stl_url: string;
	spec_url: string;
}

export interface StoreState {
	chosenDesign: Design;
}

export interface Props {
  designs: StoreState;
  updateChosenDesign: UpdateDesign;
}