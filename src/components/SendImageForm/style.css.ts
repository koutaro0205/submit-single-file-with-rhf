import { style } from '@vanilla-extract/css';

const FIELD_SIZE = 210;

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
});

export const inputField = style({
  border: 'black 3px dotted',
  width: FIELD_SIZE,
  height: FIELD_SIZE,
  display: 'flex',
  borderRadius: 12,
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  cursor: 'pointer',
});

export const image = style({
  objectFit: 'cover',
  width: '100%',
  height: '100%',
});

export const buttonGroup = style({
  display: 'flex',
  gap: 12,
});

export const errorMessage = style({
  color: 'red',
  fontSize: 12,
});
