import type { ExtractPropTypes } from 'vue';
import type Icon from './Icon.vue';

export const iconProps = {
  rotate: {
    type: Number,
    default: undefined
  },
  spin: Boolean,
  size: {
    type: Number,
    default: undefined
  },
  color: {
    type: String,
    default: ''
  }
};

export type IconProps = ExtractPropTypes<typeof iconProps>;

export type IconInstanceType = InstanceType<typeof Icon>;
