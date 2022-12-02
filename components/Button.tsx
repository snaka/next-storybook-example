export interface ButtonProps {
  caption: string;
  onClick: () => void;
}

export const Button = ({ caption, onClick }: ButtonProps) => {
  return <button onClick={onClick}>caption:{caption}</button>;
};
