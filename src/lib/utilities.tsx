import React from 'react'

export const FormLayout = (props: any) => {
  const {
    direction,
    size,
    label,
    labelOptional,
    layout,
    children,
    id,
    error,
    descriptionText,
  } = props

  const spacingClass =
    'space-' + (direction === 'vertical' ? 'y' : 'x') + '-' + size

  return (
    <div className="grid md:grid-cols-12 gap-4">
      <Space
        direction={
          layout && layout === 'horizontal' ? 'vertical' : 'horizontal'
        }
        className={"pt-1" + 
        (layout !== 'horizontal'
            ? ' justify-between col-span-12'
            : ' col-span-5')
        }
      >
        {label && (
          <label
            className="block text-sm font-sml text-gray-700 dark:text-gray-200"
            htmlFor={id}
          >
            {label}
          </label>
        )}
        {labelOptional && (
          <span className="text-sm text-gray-400 dark:text-gray-300" id={id + '-optional'}>
            {labelOptional}
          </span>
        )}
      </Space>
      <div className={layout !== 'horizontal' ? 'col-span-12' : 'col-span-7'}>
        {children}
        {error && (
          <p className="mt-2 text-sm text-red-500" id="email-error">
            {error}
          </p>
        )}
        {descriptionText && (
          <p className="mt-2 text-sm text-gray-400 dark:text-gray-300" id={id + '-description'}>
            {descriptionText}
          </p>
        )}
      </div>
    </div>
  )
}

export const Space = (props: any) => {
  const { direction, size, className } = props

  const spacingClass =
    'space-' + (direction === 'vertical' ? 'y' : 'x') + '-' + size

  return (
    <div
      className={
        'flex' +
        (className ? ' ' + className : '') +
        (spacingClass ? ' ' + spacingClass : '') +
        (direction === 'vertical' ? ' flex-col' : ' flex-row')
      }
    >
      {props.children}
    </div>
  )
}