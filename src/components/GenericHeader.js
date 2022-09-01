import '../css/home/headerStyles.css';

const GenericHeader = (props) => {
    const { message, name } = props;
    return (
        <>
            <h1 className='txt-header'>{name}</h1>
            <h1 className='txt-header'>{message}</h1>
        </>
    )
}

export default GenericHeader