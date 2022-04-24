import { format } from 'prettier';
import type { BuiltInParserName } from 'prettier';
export const formatCode = (
  code: string,
  parser: BuiltInParserName = 'typescript'
) =>
  format(code, {
    parser,
    semi: false,
    singleQuote: true
  });
