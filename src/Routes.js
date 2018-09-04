import { createStackNavigator } from 'react-navigation';
import WelcomePage from './pages/WelcomePage';
import FormLogin from './pages/FormLogin';
import FormCadastro from './pages/FormCadastro';

const Routes = createStackNavigator ({
    'Welcome': {
        screen: WelcomePage,
        navigationOptions: {
            header: null,
        }
    },
    'FormLogin': {
        screen: FormLogin,
        navigationOptions: {
            header: null
        }
    },
    'FormCadastro': {
        screen: FormCadastro,
        navigationOptions: {
            headerTransparent: true
        },
    }
})

export default Routes;
