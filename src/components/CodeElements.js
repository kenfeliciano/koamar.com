import styled from 'styled-components'

export const TitleContainer = styled.div`
  background-color: var(--code-title-background);
  color: var(--code-title-text);
  padding: 0.6rem 1rem;
  border-radius: 0.4rem 0.4rem 0 0;
  font-size: 0.9rem;
  margin-top: 0.8rem;
`
export const CopyCode = styled.button`
  background-color: var(--code-title-background);
  color: var(--code-title-text);
  position: absolute;
  right: 0;
  top: 0;
  border: 0;
  border-radius: 3px;
  margin: 0.5em;
  opacity: 0.5;
  padding: 0.2rem;
  &:hover {
    opacity: 1;
  }
`
