import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { isSystemDarkTheme } from '../Browser';

describe('Browser utilities', () => {
    describe('isSystemDarkTheme', () => {
        const originalMatchMedia = window.matchMedia;

        beforeEach(() => {
            // @ts-expect-error override for test
            window.matchMedia = vi.fn();
        });

        afterEach(() => {
            window.matchMedia = originalMatchMedia;
        });

        it('returns true when prefers-color-scheme is dark', () => {
            // @ts-expect-error override for test
            window.matchMedia.mockReturnValue({ matches: true });
            expect(isSystemDarkTheme()).toBe(true);
        });

        it('returns false when prefers-color-scheme is not dark', () => {
            // @ts-expect-error override for test
            window.matchMedia.mockReturnValue({ matches: false });
            expect(isSystemDarkTheme()).toBe(false);
        });
    });
});
