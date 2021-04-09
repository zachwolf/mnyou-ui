import React from 'react'
import { Link } from 'gatsby'

const styleMap = {
  sm: {
    active: `
      bg-indigo-50
      border-indigo-500
      text-indigo-700
      block
      pl-3
      pr-4
      py-2
      border-l-4
      text-base
      font-medium
      flex-grow
    `,
    '': `
      border-transparent
      text-gray-500
      hover:bg-gray-50
      hover:border-gray-300
      hover:text-gray-700
      block
      pl-3
      pr-4
      py-2
      border-l-4
      text-base
      font-medium
      flex-grow
    `,
  },
  '': {
    active: `
      border-indigo-500
      text-gray-900
      inline-flex
      items-center
      px-1
      pt-1
      border-b-2
      text-sm
      font-medium
    `,
    '': `
      border-transparent
      text-gray-500
      hover:border-gray-300
      hover:text-gray-700
      inline-flex
      items-center
      px-1
      pt-1
      border-b-2
      text-sm
      font-medium
    `,
  },
}

const isActive = sm => ({ isCurrent }) => {
  return {
    className: styleMap[sm ? 'sm' : ''][isCurrent ? 'active' : ''],
  }
}

export default function NavLink({ sm, ...props }) {
  return <Link getProps={isActive(sm)} {...props} />
}
