"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUserUseCase = exports.UpdateUserUseCase = exports.GetUserByIdUseCase = exports.GetUsersUseCase = exports.CreateUserUseCase = void 0;
class CreateUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(userData) {
        return this.userRepository.create(userData);
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
class GetUsersUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute() {
        return this.userRepository.findAll();
    }
}
exports.GetUsersUseCase = GetUsersUseCase;
class GetUserByIdUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(id) {
        return this.userRepository.findById(id);
    }
}
exports.GetUserByIdUseCase = GetUserByIdUseCase;
class UpdateUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(id, userData) {
        return this.userRepository.update(id, userData);
    }
}
exports.UpdateUserUseCase = UpdateUserUseCase;
class DeleteUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(id) {
        return this.userRepository.delete(id);
    }
}
exports.DeleteUserUseCase = DeleteUserUseCase;
