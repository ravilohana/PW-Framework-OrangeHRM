import {test as baseTest} from '../fixtures/pom-fixtures'
import CommonUtils from '../utils/CommonUtils'

type CommonUtilsFixtureType = {
    commonUtilsFixture:CommonUtils
}

export const test = baseTest.extend<CommonUtilsFixtureType>({
    commonUtilsFixture: async({page},use) =>{
        await use(new CommonUtils());
    }
})