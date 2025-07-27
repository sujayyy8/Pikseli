import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import {Link,NavLink} from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]

  return (
    <header className='py-3 shadow bg-white'>
      <Container>
        <nav className='flex items-center'>
          <div className='mr-4'>
            <Link to='/' className='h-60 overflow-hidden relative'>
              <Logo className='object-cover w-[150px] mt-[-10px] mb-[-10px]' />
            </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <NavLink
                  to={item.slug}
                  className={({ isActive }) =>
                    `inline-block px-6 py-2 rounded-full font-semibold duration-200 ${
                      isActive
                        ? ' text-[rgba(103,91,254,1)]'
                        : 'hover:bg-[rgba(103,91,254,1)]'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
        </Container>
    </header>
  )
}

export default Header