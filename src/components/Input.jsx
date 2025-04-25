import React from 'react';
import styled from 'styled-components';

const Input = ({ value, onChange }) => {
  return (
    <Wrapper>
      <div className="search-container">
        <input
          type="text"
          value={value}
          onChange={onChange}
          aria-label="search"
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
    justify-content: space-between;
    background: linear-gradient(135deg, #b3d0fd, #a4caf8);
    padding: 6px 16px;
    border-radius: 1000px;
    box-shadow: 5px 5px 15px rgba(132, 190, 255, 0.6);
    width: 100%;
    max-width: 320px;
    position: relative;
  }

  input {
    flex: 1;
    border: none;
    background: linear-gradient(135deg, #dae8f7, #d6e5f7);
    padding: 12px 16px;
    border-radius: 1000px;
    font-size: 18px;
    color: #4e89ff;
  }

  input:focus {
    outline: none;
    background: linear-gradient(135deg, #eff7ff, #d6e5f7);
  }

  input::placeholder {
    display: none;
  }

  .icon {
    width: 24px;
    height: 24px;
    fill: white;
    margin-left: -30px;
    z-index: 1;
    pointer-events: none;
  }
`;

export default Input;
