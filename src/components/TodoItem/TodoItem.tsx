import { IconButton, Menu, MenuItem, MenuButton, MenuList, Checkbox } from '@chakra-ui/react'
import { FC } from 'react'
import { ITodo } from '../../types/types'
import { FiMoreVertical } from 'react-icons/fi'
import { AiOutlineDelete, AiOutlineExclamation, AiOutlineEdit } from 'react-icons/ai'
import styles from './TodoItem.module.scss'
import classNames from 'classnames';

interface ITodoItem {
    todo: ITodo;
    removeTodo: (id: number) => void;
    completeTodo: (id: number) => void;
    importantTodo: (id: number) => void;
}

export const TodoItem: FC<ITodoItem> = ({todo, removeTodo, completeTodo, importantTodo}) => {

    const { id, title, date, completed, important } = todo

    return (
        <li className={classNames(styles.item, important ? styles.itemImportant : null, completed ? styles.itemActive : '' )} >
            <span className={styles.left}>
                <span className={styles.date}>{date}</span>
                <div className={styles.bottom}>
                    <Checkbox mr={3} isChecked={completed} onChange={() => completeTodo(id)} />
                    <span className={classNames(styles.title)}>{title}</span>
                </div>
            </span>

            <Menu>
                <MenuButton
                    as={IconButton}
                    aria-label='Options'
                    icon={<FiMoreVertical/>}
                    variant='outline'
                    className={styles.menuBtn}
                />
                <MenuList zIndex='2'>
                    <MenuItem className={styles.menuItem} icon={<AiOutlineEdit/>}>
                        Edit title
                    </MenuItem>
                    <MenuItem onClick={() => importantTodo(id)} className={styles.menuItem} icon={<AiOutlineExclamation/>}>
                        {important ? 'Mark as unimportant' : 'Mark as important'}
                    </MenuItem>
                    <MenuItem onClick={() => removeTodo(id)} className={styles.menuItem} icon={<AiOutlineDelete/>}>
                        Delete
                    </MenuItem>
                </MenuList>
            </Menu>
        </li>
    )
}
