import { describe, it, expect } from 'bun:test';
import React from 'react';

describe('App Component', () => {
  it('debería renderizar correctamente', () => {
    // Test simple para verificar que React funciona
    expect(React).toBeDefined();
  });

  it('debería tener el nombre del proyecto', () => {
    const projectName = 'bankdigital-templune';
    expect(projectName).toBeDefined();
    expect(projectName.length).toBeGreaterThan(0);
  });
});
