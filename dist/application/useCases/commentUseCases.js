"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCommentUseCase = exports.UpdateCommentUseCase = exports.GetCommentByIdUseCase = exports.GetCommentsByPostIdUseCase = exports.CreateCommentUseCase = void 0;
class CreateCommentUseCase {
    constructor(commentRepository) {
        this.commentRepository = commentRepository;
    }
    async execute(commentData) {
        return this.commentRepository.create(commentData);
    }
}
exports.CreateCommentUseCase = CreateCommentUseCase;
class GetCommentsByPostIdUseCase {
    constructor(commentRepository) {
        this.commentRepository = commentRepository;
    }
    async execute(postId) {
        return this.commentRepository.findAllByPostId(postId);
    }
}
exports.GetCommentsByPostIdUseCase = GetCommentsByPostIdUseCase;
class GetCommentByIdUseCase {
    constructor(commentRepository) {
        this.commentRepository = commentRepository;
    }
    async execute(id) {
        return this.commentRepository.findById(id);
    }
}
exports.GetCommentByIdUseCase = GetCommentByIdUseCase;
class UpdateCommentUseCase {
    constructor(commentRepository) {
        this.commentRepository = commentRepository;
    }
    async execute(id, commentData) {
        return this.commentRepository.update(id, commentData);
    }
}
exports.UpdateCommentUseCase = UpdateCommentUseCase;
class DeleteCommentUseCase {
    constructor(commentRepository) {
        this.commentRepository = commentRepository;
    }
    async execute(id) {
        return this.commentRepository.delete(id);
    }
}
exports.DeleteCommentUseCase = DeleteCommentUseCase;
