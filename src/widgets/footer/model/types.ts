export interface FooterLink {
  label: string;
  to: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface FooterProps {
  columns?: FooterColumn[];
  copyright?: string;
}