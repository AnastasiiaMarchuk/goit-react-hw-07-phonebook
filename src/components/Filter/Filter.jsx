import { Wrapper } from './Filter.styled';
import { MdOutlineClear } from 'react-icons/md';
import { useFilter } from 'redux/hooks';

export const Filter = () => {
  const { searchContact, filter } = useFilter();

  const onInput = event => {
    const searchName = event.target.value.toLowerCase();
    searchContact(searchName);
  };

  const clearInput = () => {
    searchContact('');
  };

  return (
    <Wrapper>
      <label>
        Find contact by name
        <input
          type="text"
          value={filter}
          onChange={onInput}
          placeholder={'search'}
        />
        <button onClick={clearInput}>
          <MdOutlineClear size={21} color="#0D2146" />
        </button>
      </label>
    </Wrapper>
  );
};
