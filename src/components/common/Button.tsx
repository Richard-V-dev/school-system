import './Button.css';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    variant?: 'primary'|'secondary'|'outline'|'ghost';
    size?: 'sm'|'md'|'lg';
    children: React.ReactNode;
}
function Button({variant='primary',size = 'md',children, ...props}:ButtonProps){
    return (<>
        <button className={`btn-${variant} btn-${size}`} {...props}>
            {children}
        </button>
    </>);
}
export default Button;