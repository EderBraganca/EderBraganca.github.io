import React, { useState } from 'react';
import { Window, WindowHeader, Button, Toolbar, WindowContent, ScrollView, MenuList, MenuListItem, Separator } from 'react95';

export const Thin = ({ projectName, imageSrc, projectLink}) => {
    const [open, setOpen] = useState(false);

    return (
        <Window style={{ maxWidth: '300px', margin: '10px'}}>
            <a href={projectLink}  
                target='_blank' rel='noopener noreferrer'
                style={{textDecoration: 'none',
                color: 'black',
                textAlign: 'start'}}>
                <WindowHeader style={{ backgroundColor: '#060083', color: 'white', padding:'0 10px'}} >
                    {projectName}
                </WindowHeader>
            </a>
            <Toolbar noPadding>
                <Button variant='thin' disabled
                        style={{ backgroundColor: 'transparent' }}>
                    Upload
                </Button>
                <Button variant='thin' disabled
                        style={{ backgroundColor: 'transparent' }}>
                    Save
                </Button>
                <div
                    style={{
                        position: 'relative',
                        display: 'inline-block',
                        alignSelf: 'left'
                    }}
                >
                    <Button
                        variant='thin'
                        onClick={() => setOpen(!open)}
                        size='sm'
                        active={open}
                        style={{ backgroundColor: 'transparent' }}
                    >
                        Share
                    </Button>
                    {open && (
                        <MenuList
                            style={{
                                position: 'absolute',
                                right: '0',
                                top: '100%',
                                zIndex: '9999',
                                backgroundColor: '#fff',

                            }}
                            onClick={() => setOpen(false)}
                        >
                            <MenuListItem size='sm' active>Copy link</MenuListItem>
                            <Separator />
                            <MenuListItem size='sm'>
                                <a href={projectLink} 
                                    target='_blank' rel='noopener noreferrer'
                                    style={{textDecoration: 'none',
                                            color: 'black'}}>
                                    Open link
                                </a>
                            </MenuListItem>
                            <Separator />
                            <MenuListItem size='sm' disabled>
                                MySpace
                            </MenuListItem>
                        </MenuList>
                    )}
                </div>
            </Toolbar>
            <WindowContent style={{ padding: '0.25rem' }}>
                <ScrollView>
                    <img
                        style={{ width: '200px', height: '100px', display: 'block' }}
                        src={imageSrc}
                        alt='Project Image'
                    />
                </ScrollView>
            </WindowContent>
        </Window>
    );
}

Thin.story = {
    name: 'thin'
};