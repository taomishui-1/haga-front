import Cookies from 'js-cookie'

const AccessTokenKey = 'accessToken'
const RefreshTokenKey = 'refreshToken'
const UserIDKey = 'user-id'
const LoginAccountKey='loginAccount'
export function getAccessToken() {
    return Cookies.get(AccessTokenKey)
}

export function setAccessToken(accessToken) {
    return Cookies.set(AccessTokenKey, accessToken)
}

export function removeAccessToken() {
    return Cookies.remove(AccessTokenKey)
}

export function getRefreshToken() {
    return Cookies.get(RefreshTokenKey)
}

export function setRefreshToken(refreshToken) {
    return Cookies.set(RefreshTokenKey, refreshToken)
}

export function removeRefreshToken() {
    return Cookies.remove(RefreshTokenKey)
}

export function getUserId() {
    return Cookies.get(UserIDKey)
}

export function setUserId(userId) {
    return Cookies.set(UserIDKey, userId)
}
export function getLoginAccount() {
    return Cookies.get(LoginAccountKey)
}

export function setLoginAccount(loginAccount) {
    return Cookies.set(LoginAccountKey, loginAccount)
}