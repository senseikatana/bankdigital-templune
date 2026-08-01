import { describe, it, expect } from 'bun:test';
import React from 'react';

describe('bankdigital-templune', () => {
  it('debería funcionar correctamente', () => {
    expect(true).toBe(true);
  });

  it('debería renderizar React', () => {
    // Un test simple para verificar que React está disponible
    expect(React).toBeDefined();
  });
});
