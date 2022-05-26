import React from 'react'

type propsTypes ={
    name: string,
    onClick: () => void ,
    className: string,
    disabled: boolean,
    active: boolean,
    href?: string,
    children?: object

}

export const Button = ( {name, onClick, className, disabled, active, children, ...attr}:propsTypes) => {
    // console.log(onClick);

    const Tag = attr.href ? 'a' :'button';
    
  return (
    <Tag
    {...attr}
    onClick={onClick}
    className={className}
    disabled={disabled}
    >{name}{children}</Tag>
  )
}

Button.defaultProps ={
    name: "default btn",
    onClick: () => {} ,
    className: '',
    disabled: false,
    active: false,
}


