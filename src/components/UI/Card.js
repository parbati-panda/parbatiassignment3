import classess from './Card.module.css';
const Card= props =>{
return <div className={classess.Card}>
{props.children}
</div>
};

export default Card;