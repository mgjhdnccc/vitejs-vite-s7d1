import React from 'react';
import styled from 'styled-components';

const Input = ({ value, onChange }) => {
  return (
    <Wrapper>
      <div className="search-container">
        <input
          type="text"
          placeholder="Ara..."
          value={value}
          onChange={onChange}
        />
        <svg viewBox="0 0 24 24" className="icon">
          <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
        </svg>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .search-container {
    display: flex;
    align-items: center;
    background: linear-gradient(135deg, #b3d0fd, #a4caf8);
    padding: 6px 10px;
    border-radius: 999px;
    box-shadow: 5px 5px 15px rgba(132, 190, 255, 0.6);
    width: 100%;
    max-width: 320px;
    position: relative;
  }

  input {
    flex: 1;
    border: none;
    background: linear-gradient(135deg, #dae8f7, #d6e5f7);
    padding: 10px 16px;
    border-radius: 999px;
    font-size: 16px;
    color: #4e89ff;
  }

  input::placeholder {
    color: #9ebcd9;
  }

  input:focus {
    outline: none;
    background: linear-gradient(135deg, #eff7ff, #d6e5f7);
  }

  .icon {
    width: 26px;
    height: 26px;
    fill: white;
    margin-left: 10px;
  }
`;

export default Input;
