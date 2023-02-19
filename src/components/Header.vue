<template>
  <header class="header">
    <div class="header-left">
      <div class="header-icon">D</div>
      <span>Dashboard</span>
    </div>
    <div class="header-right">
      <div class="help">
        <div class="help-text">Help</div>
        <div class="help-icon">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.07 9.25L12.17 10.17C11.45 10.89 11 11.5 11 13H9V12.5C9 11.39 9.45 10.39 10.17 9.67L11.41 8.41C11.78 8.05 12 7.55 12 7C12 5.89 11.1 5 10 5C9.46957 5 8.96086 5.21071 8.58579 5.58579C8.21071 5.96086 8 6.46957 8 7H6C6 5.93913 6.42143 4.92172 7.17157 4.17157C7.92172 3.42143 8.93913 3 10 3C11.0609 3 12.0783 3.42143 12.8284 4.17157C13.5786 4.92172 14 5.93913 14 7C14 7.88 13.64 8.67 13.07 9.25ZM11 17H9V15H11V17ZM10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C3.85752 17.9997 4.95991 18.7362 6.17317 19.2388C7.38642 19.7413 8.68678 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 4.47 15.5 0 10 0Z"
              fill="#C6CACC" />
          </svg>
        </div>
      </div>
      <div class="upgrade">upgrade</div>
      <div class="avatar">
        <img src="@/assets/images/Male.jpg" alt="" />
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
}

.header-left {
  display: flex;
  align-items: center;
  color: #5e6366;
  font-family: 'Racing Sans One', cursive;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.15px;
  font-weight: 400;
}

.header-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--blue);

  text-shadow: 0px 16px 24px rgba(54, 123, 245, 0.16), 0px 6px 12px rgba(54, 123, 245, 0.16);
  box-shadow: 0px 2px 6px rgba(8, 35, 48, 0.16), 0px 1px 2px rgba(8, 35, 48, 0.24);
  border-radius: 10px;
  margin-right: 10px;
}

.header-right {
  display: flex;
  font-family: 'Roboto', sans-serif;
}

.help {
  width: 96px;
  background: #f7f9fa;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 9px;
}

.help-icon {}

.upgrade {
  width: 96px;
  margin: 0 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  box-shadow: 0px 4px 8px rgba(54, 123, 245, 0.16), 0px 2px 4px rgba(54, 123, 245, 0.24);
  border-radius: 10px;
  color: var(--blue);
  text-transform: uppercase;
  font-weight: 500;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>


