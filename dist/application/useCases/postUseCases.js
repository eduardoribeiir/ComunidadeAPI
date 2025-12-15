"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePostUseCase = exports.UpdatePostUseCase = exports.GetPostByIdUseCase = exports.GetPostsUseCase = exports.CreatePostUseCase = void 0;
class CreatePostUseCase {
    constructor(postRepository) {
        this.postRepository = postRepository;
    }
    async execute(postData) {
        return this.postRepository.create(postData);
    }
}
exports.CreatePostUseCase = CreatePostUseCase;
class GetPostsUseCase {
    constructor(postRepository) {
        this.postRepository = postRepository;
    }
    async execute() {
        return this.postRepository.findAll();
    }
}
exports.GetPostsUseCase = GetPostsUseCase;
class GetPostByIdUseCase {
    constructor(postRepository) {
        this.postRepository = postRepository;
    }
    async execute(id) {
        return this.postRepository.findById(id);
    }
}
exports.GetPostByIdUseCase = GetPostByIdUseCase;
class UpdatePostUseCase {
    constructor(postRepository) {
        this.postRepository = postRepository;
    }
    async execute(id, postData) {
        return this.postRepository.update(id, postData);
    }
}
exports.UpdatePostUseCase = UpdatePostUseCase;
class DeletePostUseCase {
    constructor(postRepository) {
        this.postRepository = postRepository;
    }
    async execute(id) {
        return this.postRepository.delete(id);
    }
}
exports.DeletePostUseCase = DeletePostUseCase;
