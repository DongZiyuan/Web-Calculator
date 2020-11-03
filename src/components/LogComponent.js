const LogComponent = (props) => {
  const log = props.value;
  const queue = log.split('#');
  return (
    <div className='log'>
      <ul>
        { queue.map((item) => {
            const [time, res] = item.split('-');
            return <li key={ time }>{ time }<br/>{ res }</li>
          }) 
        }
      </ul>
    </div>
  );
}

export default LogComponent;
