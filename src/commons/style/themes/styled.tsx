import styled, { CreateStyled } from '@emotion/styled';

export type Palette = {
  primary: string;
  secondary: string;
};

export type Theme = {
  palette: Palette;
};

export default styled as CreateStyled<Theme>;
