import classNames from 'classnames';

export default function (componentName: string, conditions?: Record<string, any>) {
  const _extra = {};
  Object.entries(conditions).forEach(([k, v]: [string, any]) => {
    _extra[k] = !!v;
  });
  return classNames({
    'shadow-component': true,
    [`shadow-component__${componentName}`]: true,
    ..._extra
  });
}
