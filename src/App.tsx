import { useEffect, useRef, useState } from 'react'
import { FluentProvider, webLightTheme, Button, Menu, MenuList, MenuItem, MenuPopover, MenuOpenChangeData, PositioningImperativeRef } from '@fluentui/react-components';
import './App.css'

function App() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const positioningRef = useRef<PositioningImperativeRef>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (buttonRef.current) {
      positioningRef.current?.setTarget(buttonRef.current);
    }
  }, [buttonRef, positioningRef])

  function handleButtonClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    (e.target as HTMLButtonElement).focus();
    setOpen(!open);
  }

  function onOpenChange(e: MouseEvent | React.MouseEvent<HTMLElement, MouseEvent> | React.KeyboardEvent<HTMLElement> | TouchEvent, data: MenuOpenChangeData) {
    setOpen(data.open);
  }

  return (
    <FluentProvider theme={webLightTheme}>
          <div style={{
            height: 2000
          }}></div>
          <div style={{
            width: 600,
            height: 480,
            backgroundColor: 'black'
          }}>
            <div style={{position: 'relative', width: '100%', height: '100%'}}>
                <div style={{position: 'absolute', bottom: 0}}>
                  <Button ref={buttonRef} onClick={handleButtonClick}>
                    Toggle Menu
                  </Button>
                  <Menu
                    inline
                    open={open}
                    onOpenChange={onOpenChange}
                    positioning={{
                      positioningRef: positioningRef,
                      align: 'center',
                      position: 'above',
                      pinned: true
                    }}
                    >
                    <MenuPopover className='popover-location'>
                      <MenuList>
                        <MenuItem>Test 1</MenuItem>
                        <MenuItem>Test 2</MenuItem>
                        <MenuItem>Test 1</MenuItem>
                        <MenuItem>Test 2</MenuItem>
                        <MenuItem>Test 1</MenuItem>
                        <MenuItem>Test 2</MenuItem>
                        <MenuItem>Test 1</MenuItem>
                        <MenuItem>Test 2</MenuItem>
                      </MenuList>
                    </MenuPopover>
                  </Menu>
                </div>
            </div>
          </div>
          <div style={{
            height: 5000
          }}></div>
    </FluentProvider>
  )
}

export default App
