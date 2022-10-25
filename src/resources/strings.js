module.exports = {
    key: {
        storage: {
            current_account: "CURRENT_USER",
            introducetion: {
                "gioi-thieu": "Giới thiệu",
                "doi-ngu-giang-vien": "Đội ngũ giảng viên",
                "gioi-thieu-chung": "Giới thiệu chung",
                "moi-truong-hoc": "Môi trường học",
                "doi-tac": "Đối tác",
                "lien-he": "Liên hiện",
                "phat-trien-ban-than": "Phát triển bản thân",
                "kinh-te": "Kinh tế",
                "chuyen-de": "Chuyên đề",
                "tuyen-sinh": "Tuyển sinh"
            },
            economicalpage: {
                "nhan-su": "Nhân sự",
                "marketing": "Marketing",
                "ban-hang": "Bán hàng",
                "tai-chinh": "Tài chính",
                "thuong-hieu": "Thương hiệu",
            },


        }
    },
    action: {
        action_user_login: "ACTION_USER_LOGIN",
        action_user_logout: "ACTION_USER_LOGOUT",
        set_info_page: "SET_INFO_PAGE",
    },
    message: {
        user: {
            create_error: "Tạo mới tài khoản không thành công!",
            update_error: "Cập nhật tài khoản không thành công!",
            error_code_2: "SĐT đã được sử dụng trong hệ thống. Vui lòng sử dụng SĐT khác!",
            error_code_3: "Email đã được sử dụng trong hệ thống. Vui lòng sử dụng Email khác!",
            error_code_5: "Username đã tồn tại trên hệ thống. Vui lòng sử dụng Username khác!",
        }
    },
    api: {
        user: {
            search: "/api/user/search",
            login: "/api/user/login",
            block: "/api/user/block",
            create: "/api/user/create",
            update: "/api/user/update",
            reset: "/api/user/reset-password",
            active: "/user/set-active",
            detail: "/user/get-detail",
            updatePassword: "/user/update-password",
            updateEmail: "/user/update-email",
            changePassword: "/api/user/change-password",
            getEhealth: "/api/patient/v1/kiosk/patient-histories",
            searchServices: "/api/master-data/v1/kiosk/master-data",
            userSatisfied: "/api/medical-incident/v1/user-satisfied",
            // userNgoaitru: "/api/medical-incident/v1/nb-noi-tru",
        },
        enroll:
        {
            search: "/api/enroll/search",
            delete: "/api/enroll/delete",
            create: "/api/enroll/create",
            exports: "/api/enroll/exportexcel",
        },
        course: {
            search: "/api/course/search",
            get_all: "/api/course/get-all"
        },


        user_access: {
            user_access: "/user-access-count/get-count"
        },
        menu: {
            search: "/api/menu/search",
            create: "/api/menu/create",
            update: "/api/menu/update",
            delete: '/api/menu/delete',
            get_by_courseId: "/api/menu/get-by-courseId",
            getmenubyalias: "/api/menu/getmenubyalias"
        },
        news: {
            search: "/api/news/search",
            create: "/api/news/create",
            update: "/api/news/update",
            delete: '/api/news/delete',
            getDetail: "/api/news/detail",
            getByAlias: "/api/news/alias",
            get_info_by_alias: "/api/news/getinfobyalias",
            searchByAlias: "/api/news/searchByAliasOfCourse",
        },
        category: {
            get_all: "/api/category/get-all",
            search: "/api/category/search",
            create: "/api/category/create",
            update: "/api/category/update",
            delete: '/api/category/delete',
            getDetail: "/api/category/get-detail",
            getByAlias: "/api/category/get-by-alias"
        },
        page: {
            search: "/api/page/search",
            create: "/api/page/create",
            update: "/api/page/update",
            delete: '/api/page/delete',
            getDetail: "/api/page/get-detail",
            getByAlias: "/api/page/alias",
            getByAliasOfPage: "/api/page/getinfobyaliasofpage",
        },
        image: {
            upload: "/api/file/upload-image"
        }
    }
}