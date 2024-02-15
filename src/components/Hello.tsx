type HelloProps = {
  name: string;
}

export default function Hello({ name }: HelloProps) {
  return <span>{name}</span>
}
