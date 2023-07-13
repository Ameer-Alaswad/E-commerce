import { useContext } from 'react'
import { AppContext } from '../../contexts/app-context'

const useAppContext = () => {
    const {

        handleNavigation,
        getMenuClickHandler,
    } = useContext(AppContext)
    return {

        handleNavigation,
        getMenuClickHandler,
    }
}

export default useAppContext