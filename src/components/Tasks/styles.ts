import styled, { css } from "styled-components/native";

export type TextTypeStyleProps = "ENABLE" | "DISABLED";

type Props = {
  type: TextTypeStyleProps;
};

export const Container = styled.View`
  padding: 20px;
  border-radius: 6px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};

  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 0;
`;

export const Text = styled.Text<Props>`
  width: 220px;
  flex-wrap: wrap;
  text-align: justify;

  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${type === "ENABLE" ? theme.COLORS.GRAY_100 : theme.COLORS.GRAY_300};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const TextDisabled = styled.Text`
  width: 200px;
`;