
type MyComponentProps = {
    message: string;
};

export function MyComponent({ message }: MyComponentProps): JSX.Element {
    return (
        <p>
            {message}
        </p>
    );
}