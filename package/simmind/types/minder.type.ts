export type MinderTheme =
  | 'classic'
  | 'classic-compact'
  | 'fresh-blue'
  | 'fresh-blue-compat'
  | 'fresh-green'
  | 'fresh-green-compat'
  | 'fresh-pink'
  | 'fresh-pink-compat'
  | 'fresh-purple'
  | 'fresh-purple-compat'
  | 'fresh-red'
  | 'fresh-red-compat'
  | 'fresh-soil'
  | 'fresh-soil-compat';
export interface Minder {
  setDefaultOptions: ({ defaultTheme }: { defaultTheme: MinderTheme }) => void;
  setInitData: (data: any) => void;
  importJson: ({ root, template }: { root: any; template: string }) => void;
  execCommand: (key: string, data?: any) => void;
  on: (key: string, handler: (e?: Event) => void) => void;
  off: (key: string, handler: (e?: Event) => void) => void;
}
