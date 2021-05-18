import { createGlobalStyle } from 'styled-components'

const SkillListStyles = createGlobalStyle`
  .skill-list {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0 -1.8rem -3.6rem !important;

    &-skill {
      width: calc(33.33% - var(--gutter));
      margin: 0 var(--gutter-half) var(--gutter);
      display: flex;
      align-items: center;

      @media (max-width: 580px) {
        width: calc(50% - var(--gutter));
      }
    }

    &-icon {
      color: var(--purple);
      font-size: 6rem;
      margin-right: var(--gutter-half);
    }
  }
`

export default SkillListStyles
