import './ExpenseFilter.css';
const ExpenseFilter = (props) => {
  const dropdownChangeHandler = (e) => {
    props.onchangeFilter(e.target.value);
  };
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label htmlFor=''>Filter By Year</label>
        <select
          value={props.selected}
          name=''
          id=''
          onChange={dropdownChangeHandler}
        >
          <option value='Select Year'>Select Year</option>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};
export default ExpenseFilter;
